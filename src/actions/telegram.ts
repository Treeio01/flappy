"use server"

import { z } from "zod"

const formSchema = z.object({
    experience: z.string().min(1, "Experience is required"),
    wallet: z.string().min(1, "Wallet address is required"),
    twitter: z.string().min(1, "Twitter handle is required"),
})

type FormData = z.infer<typeof formSchema>

export async function submitToTelegram(formData: FormData) {
    try {
        const validatedData = formSchema.parse(formData)

        const botToken = '7810103384:AAE6FCRWDX41dTruVpmj91cIlIk1xkwK5-k'
        const chatId = '7366050080'

        if (!botToken || !chatId) {
            throw new Error("Telegram configuration is missing")
        }

        const message = `
NEW FORM FILLING!:
Experience:${validatedData.experience}
Wallets:${validatedData.wallet}
X/Twitter:${validatedData.twitter}`.trim()

        // Send message to Telegram
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "HTML",
            }),
        })

        const result = await response.json()

        if (!response.ok) {
            throw new Error(result.description || "Failed to send message to Telegram")
        }

        return { success: true }
    } catch (error) {
        console.error("Error submitting to Telegram:", error)
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error occurred",
        }
    }
}

