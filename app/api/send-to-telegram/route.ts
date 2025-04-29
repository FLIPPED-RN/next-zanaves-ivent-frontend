import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { message } = await request.json()
    
    const botToken = "7853072041:AAG4_JlBuEecG54w_VaGunelQpH2CpKObLU"
    const chatId = "1619191387"

    if (!botToken || !chatId) {
      throw new Error('Не настроены переменные окружения')
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        }),
      }
    )

    if (!telegramResponse.ok) {
      throw new Error('Ошибка Telegram API')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}