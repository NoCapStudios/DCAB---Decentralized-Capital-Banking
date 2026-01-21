// server/mongodb.ts
import { MongoClient } from 'mongodb';
import "dotenv/config"

const uri = process.env.PROD_MONGODB_URI!;
let client: MongoClient | null = null;

async function getClient() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB');
    await ensureIndexes();
  }
  return client;
}

async function ensureIndexes() {
  try {
    const db = client!.db('dcab');
    const collection = db.collection('applications');

    await collection.createIndex(
      { supabaseUserId: 1 },
      { unique: true, name: 'unique_supabase_user' }
    );

    console.log('✅ MongoDB indexes created/verified');
  } catch (error: any) {
    if (error.code === 11000) {
      console.log('⚠️  Index already exists (duplicates present - will be enforced on new inserts)');
    } else {
      console.error('Error creating indexes:', error);
    }
  }
}

export async function saveApplication(formData: any) {
  const client = await getClient()
  try {
    const db = client.db('dcab');
    const collection = db.collection('applications');

    const application = {
      ...formData,
      supabaseUserId: formData.supabaseUserId,
      status: 'pending',
      createdAt: new Date(),
    };

    const result = await collection.insertOne(application);
    return { success: true, id: result.insertedId };
  } catch (error: any) {
    console.error('MongoDB error:', error);

    if (error.code === 11000) {
      return {
        success: false,
        error: 'Application already exists for this user.',
        isDuplicate: true
      }
    }

    return { success: false, error };
  }
}

export async function getApplicationByUserId(supabaseUserId: string) {
  const client = await getClient()
  try {
    const db = client.db("dcab")
    const collection = db.collection('applications');
    return await collection.findOne({ supabaseUserId });
  } catch (error) {
    console.error('MongoDB error:', error);
    return null;
  }
}

export async function getApplication(email: string) {
  try {
    const client = await getClient();
    const db = client.db('dcab');
    const collection = db.collection('applications');
    const application = await collection.findOne({ email });
    return application;
  } catch (error) {
    console.error('MongoDB error:', error);
    return null;
  }
}

export async function getBugReportUser(email: string) {
  try {
    const client = await getClient();
    const db = client.db("dcab");
    const collection = db.collection("applications");

    const user = await collection.findOne(
      { email },
      {
        projection: {
          email: 1,
          names: 1,
          _id: 0,
        },
      }
    );

    if (!user) return null;

    return {
      email: user.email,
      name:
        user.names?.preferred ||
        `${user.names?.first ?? ""} ${user.names?.last ?? ""}`.trim(),
    };
  } catch (error) {
    console.error("MongoDB error:", error);
    return null;
  }
}