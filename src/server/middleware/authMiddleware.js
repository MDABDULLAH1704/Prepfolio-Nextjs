import jwt from "jsonwebtoken";
import User from "../models/User";

export async function protect(req) {
    try {
        // ✅ Get authorization header correctly
        const authHeader = req.headers.get("authorization");

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return { error: "Not authorized, no token" };
        }

        // ✅ Extract token
        const token = authHeader.split(" ")[1];

        // ✅ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded?.id) {
            return { error: "Not authorized, invalid token" };
        }

        // ✅ Find user (optional)
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return { error: "User not found" };
        }

        // ✅ Return user data to route
        return { user };
    } catch (error) {
        console.error("Auth error:", error.message);
        return { error: "Not authorized" };
    }
}



