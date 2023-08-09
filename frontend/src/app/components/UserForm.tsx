import { useState } from "react";
import { useCreateUserMutation } from "../redux/local-api.service";

const UserForm = () => {
  const [userName, setUserName] = useState<string>("");

  const [createUserMutation, { isLoading, isError, data }] =
    useCreateUserMutation();

  const createUserHandle = () => {
    createUserMutation({ name: userName });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add name.."
        className="
          text-base
          mt-5
          p-2
          rounded-md 
          bg-gray-700 
          text-white 
          w-full 
          focus:border-purple-500 
          focus:outline-none 
          focus:ring-2
          focus:ring-purple-500"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button
        className="bg-purple-500 p-1 rounded-md hover:bg-purple-700 text-white mt-3 w-full disabled:bg-slate-600"
        disabled={isLoading}
        onClick={createUserHandle}
      >
        Add
      </button>
    </>
  );
};

export default UserForm;
