import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';

// Initialize DynamoDB Client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

// Create Document Client for easier operations
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.DYNAMODB_TABLE_NAME || 'reviews';

interface ReviewData {
  companyName: string;
  jobTitle: string;
  department?: string;
  employmentType?: string;
  workDuration?: string;
  startDate?: string;
  endDate?: string;
  country?: string;
  city?: string;
  isRemote?: boolean;
  ratings?: Record<string, { rating: number; comment: string }>;
  pros?: string;
  cons?: string;
  adviceToLeadership?: string;
  recommendToWork?: string;
  verificationMethod?: string;
  verificationEmail?: string;
  isVerified: boolean;
}

/**
 * Save a new review to DynamoDB
 */
export async function saveReview(data: ReviewData) {
  try {
    const reviewId = uuidv4();
    const timestamp = new Date().toISOString();

    const item = {
      reviewId,
      ...data,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    const command = new PutCommand({
      TableName: TABLE_NAME,
      Item: item,
    });

    await docClient.send(command);

    return {
      success: true,
      reviewId,
      message: 'Review saved successfully',
    };
  } catch (error) {
    console.error('Error saving review:', error);
    throw new Error('Failed to save review to database');
  }
}




