import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OrderRequest {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  totalPrice: number;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const orderData: OrderRequest = await req.json();
    console.log("Received order:", orderData);

    // Validate input
    if (!orderData.customerName || !orderData.customerPhone || !orderData.customerAddress) {
      return new Response(
        JSON.stringify({ error: "Missing required customer information" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!orderData.items || orderData.items.length === 0) {
      return new Response(
        JSON.stringify({ error: "No items in order" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const orderDate = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    
    // Format items for email
    const itemsList = orderData.items
      .map(item => `• ${item.name} x${item.quantity} - ${item.price.toLocaleString('vi-VN')}₫`)
      .join("<br>");

    // Send email notification using Resend API directly
    console.log("Sending email notification...");
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">📦 Đơn hàng mới - ManeyShop</h1>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">👤 Thông tin khách hàng</h2>
          <p><strong>Tên:</strong> ${orderData.customerName}</p>
          <p><strong>Số điện thoại:</strong> ${orderData.customerPhone}</p>
          <p><strong>Địa chỉ:</strong> ${orderData.customerAddress}</p>
          <p><strong>Thời gian đặt:</strong> ${orderDate}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">🛍️ Chi tiết đơn hàng</h2>
          <p>${itemsList}</p>
          <hr style="border: 1px solid #eee;">
          <h3 style="color: #000; text-align: right;">💰 Tổng cộng: ${orderData.totalPrice.toLocaleString('vi-VN')}₫</h3>
        </div>
        
        <p style="color: #666; font-size: 12px; text-align: center;">
          Email này được gửi tự động từ ManeyShop
        </p>
      </div>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "ManeyShop <onboarding@resend.dev>",
        to: ["sktmaneytri@gmail.com"],
        subject: `🛒 Đơn hàng mới từ ${orderData.customerName}`,
        html: emailHtml,
      }),
    });

    const emailResult = await emailResponse.json();
    console.log("Email response:", emailResult);

    if (!emailResponse.ok) {
      console.error("Email sending failed:", emailResult);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Đơn hàng đã được gửi thành công!",
        emailSent: emailResponse.ok 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error processing order:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
