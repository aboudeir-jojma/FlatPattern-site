import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const messagesFilePath = path.join(process.cwd(), 'data', 'messages.json');

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Read existing messages
    let messages = [];
    if (fs.existsSync(messagesFilePath)) {
      const data = fs.readFileSync(messagesFilePath, 'utf8');
      messages = JSON.parse(data);
    }

    // Add new message with timestamp
    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };
    messages.push(newMessage);

    // Write back to file
    fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
