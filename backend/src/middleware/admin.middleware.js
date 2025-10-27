export const adminOnly = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized - No user found" });
    }

    if (!req.user.isAdmin) {
      return res.status(403).json({ message: "Forbidden - Admins only" });
    }

    next();
  } catch (error) {
    console.error("Error in adminOnly middleware:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
