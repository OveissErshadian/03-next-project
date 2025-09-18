import { getUsers } from "@/core/api/users";
import Container from "../../components/container/Container";
import { inter } from "../layout";

const UsersPage = async () => {
  const users = await getUsers();
  console.log("users", users);
  return (
    <Container>
      <h1 className={inter.className}>Our users</h1>
      <ul className="flex flex-wrap gap-1">
        {users.map((value) => (
          <div
            className="min-w-32 h-20 p-2 text-center bg-blue-600"
            key={value.email}
          >
            <h5 className="">name:{value.name}</h5>
            <p className="">email:{value.email}</p>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default UsersPage;
