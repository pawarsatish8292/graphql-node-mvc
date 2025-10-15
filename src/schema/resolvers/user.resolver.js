import { User } from "../../models/user.model.js";

export const userResolver = {
    Query: {
        getUsers: async () => await User.findAll(),
        getUser: async (_, { id }) => await User.findByPk(id),
    },
    Mutation: {
        createUser: async (_, { name, email }) => {
            const newUser = await User.create({ name, email });
            return newUser;
        },
        updateUser: async (_, { id, name, email }) => {
            const user = await User.findByPk(id);
            if (!user) throw new Error("User not found");
            if (name !== undefined) user.name = name;
            if (email !== undefined) user.email = email;
            await user.save();
            return user;
        },
        deleteUser: async (_, { id }) => {
            const user = await User.findByPk(id);
            if (!user) throw new Error("User not found");
            await user.destroy();
            return "User deleted successfully";
        },
    },
};