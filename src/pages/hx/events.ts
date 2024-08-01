export async function GET() {
    const encoder = new TextEncoder()
    const message = 'The Message'
    // Create a streaming response
    const customReadable = new ReadableStream({
      async start(controller) {
        // Emit three notifications after 1 second each
        controller.enqueue(encoder.encode(`data: ${message} 1\n\n`))
        await new Promise((r) => setTimeout(r, 2000))
        controller.enqueue(encoder.encode(`data: ${message} 2\n\n`))
        await new Promise((r) => setTimeout(r, 2000))
        controller.enqueue(encoder.encode(`data: ${message} 3\n\n`))
        controller.enqueue(encoder.encode(`event: closing\ndata: time to stop\n\n`))
        await new Promise((r) => setTimeout(r, 2000))

        // Close the stream after sending the three notifications
        controller.close()
      },
    })
    // Return the stream response and keep the connection alive
    return new Response(customReadable, {
      // Set the headers for Server-Sent Events (SSE)
      headers: {
        Connection: 'keep-alive',
        'Content-Encoding': 'none',
        'Cache-Control': 'no-cache, no-transform',
        'Content-Type': 'text/event-stream; charset=utf-8',
      },
    })
  }