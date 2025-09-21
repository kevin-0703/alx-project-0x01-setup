// pages/users/index.tsx
import React from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
