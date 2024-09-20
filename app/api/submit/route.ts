import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone } = await request.json();
   
  
  const accessToken = process.env.AIRTABLE_ACCESS_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;
  
  if (!accessToken || !baseId || !tableName) {
    return NextResponse.json(
      { message: "Missing environment variables" },
      { status: 500 }
    );
  }
  
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Name: name,
            Email: email,
            Phone: phone,
          },
        }),
      }
    );
    
    const responseData = await response.json();
    console.log("Airtable response:", responseData);
    
    if (!response.ok) {
      return NextResponse.json(
        { message: "Error submitting data" },
        { status: response.status }
      );
    }
    
    return NextResponse.json({
      message: "Form submitted successfully",
      data: responseData,
    });
  } catch (error) {
    console.error("Error submitting to Airtable:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
