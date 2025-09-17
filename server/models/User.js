import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     phone: { type: String, required: true, unique: true },
//     gender: { type: String, required: true },
//     college: { type: String, required: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ['student', 'teacher'], default: 'student' },
// }, { timestamps: true });

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
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
    gender: { type: String },
    college: { type: String },
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







// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema(
//     {
//         name: { type: String, required: true },
//         email: { type: String, required: true, unique: true },
//         phone: { type: String },
//         gender: { type: String },
//         college: { type: String },
//         password: { type: String, required: true },
//         role: { type: String, default: 'student' },
//     },
//     { timestamps: true }
// );

// const User = mongoose.model('User', userSchema);

// export default User;
