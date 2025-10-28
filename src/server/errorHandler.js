import { NextResponse } from 'next/server';

export function errorHandler(error) {
    const status =
        error.statusCode && error.statusCode !== 200 ? error.statusCode : 500;

    return NextResponse.json(
        {
            success: false,
            message: error.message || 'Internal Server Error',
            // Show stack trace only in development mode
            stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
        },
        { status }
    );
}
