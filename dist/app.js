import express from 'express';
import session from 'express-session';
import path from 'path';
import { connectDB } from './config/db.js';
import indexRouter from './routes/indexRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import authRouter from './routes/authRoutes.js';
const app = express();
// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    }
}));
// Database connection
connectDB();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "dist/public")));
// View engine setup
app.set('view engine', 'ejs');
app.set("views", [path.join(process.cwd(), 'dist/views'),
    path.join(process.cwd(), 'dist/views/home'),
    path.join(process.cwd(), 'dist/views/overview'),
    path.join(process.cwd(), 'dist/views/admin/'),
    path.join(process.cwd(), 'dist/views/partials/')]);
// Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
// Error handling
app.use((req, res, next) => {
    res.status(404).render('error', { message: 'Page not found' });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { message: 'Something went wrong!' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
export default app;
//# sourceMappingURL=app.js.map