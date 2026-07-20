import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // The Web3Forms access key is now stored securely on the server
    // It should be named WEB3FORMS_ACCESS_KEY without the NEXT_PUBLIC_ prefix
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: "Server configuration error: Missing Access Key" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": request.headers.get("user-agent") || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Origin": request.headers.get("origin") || "http://localhost:3000",
        "Referer": request.headers.get("referer") || "http://localhost:3000/contact"
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...body,
      }),
    });

    // Check if the response is actually JSON before parsing
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Web3Forms returned non-JSON response:", response.status, text.substring(0, 200));
      return NextResponse.json(
        { success: false, message: "Provider returned an invalid response. Please try again later." },
        { status: 502 }
      );
    }

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to send message from provider." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
