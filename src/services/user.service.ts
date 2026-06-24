import users from "../../data/users.json";

export function getAllUsers() {
  return users;
}

export function getUserByUsername(username: string) {
  return users.find(
    (user) => user.username === username
  );
}