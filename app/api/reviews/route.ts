import { saveReview } from "@/app/lib/dynamodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {

        const body = await request.json();
        const { companyRole, verification } = body; 
        if (!companyRole?.companyName || !companyRole?.jobTitle) {
            return NextResponse.json(
              { error: 'Missing required company information' },
              { status: 400 }
            );
          }

          // TODO: handle verification method, as a first step it should be without verification


          console.log('Review Data:', {
            companyRole,
            verification: { ...verification, uploadedFile: '[File Data]' },
          });

          const result = await saveReview({
            companyName: companyRole.companyName,
            jobTitle: companyRole.jobTitle,
            isVerified: false
          })

          console.log("here is the result from the db", result)
      
          // 6. Return success response
          return NextResponse.json(
            {
              success: true,
              message: 'Review submitted successfully',
              reviewId: 'temp-id-123', // In real app, return the created review ID
            },
            { status: 201 }
          );
      
    } catch(error) {
        console.log("An error occured during data handling");
        return NextResponse.json({
            error: "Failed to submit review"
        }, {
            status: 500
        })
    }
}