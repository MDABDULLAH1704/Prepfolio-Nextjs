import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// capitalizeWords function   
function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split(' ')
        .filter(word => word.trim() !== '') // remove extra spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, set: v => capitalizeWords(v) },
    email: { type: String, required: true, unique: true, trim: true, set: v => v.toLowerCase() },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);  // Exactly 10 digits
            },
            message: props => `${props.value} is not a valid 10-digit phone number!`
        }
    },
    gender: { type: String, required: true, set: v => capitalizeWords(v) },
    course: { type: String, required: true, set: v => v.toUpperCase() },
    college: { type: String, required: true, set: v => v.toUpperCase() },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(?=.*[!@#$%^&*])(?=.{6,15})/.test(v);
            },
            message: props => 'Password must be 6-15 characters and include at least one special character!'
        }
    },
    role: { type: String, enum: ['student', 'teacher'], default: 'student' },
    sessionToken: { type: String, default: null }, // 👈 Add this
}, { timestamps: true });


// Hash password before save
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
