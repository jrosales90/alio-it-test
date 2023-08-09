"use client";

import { useGetCharactersQuery } from "./redux/api.service";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import {
  CharacterQueryParams,
  UserIntarface,
  ErrorRequestInterface,
} from "./interfaces";
import Search from "./components/Search";
import Loading from "./components/Loading";
import UserForm from "./components/UserForm";
import socket from "./services/socket";

export default function Home() {
  const [filters, setFilters] = useState<CharacterQueryParams>({});
  const { data, error, isLoading } = useGetCharactersQuery(filters);
  const [user, setUser] = useState<UserIntarface | null>(null);

  const [mError, setMError] = useState<string>("");

  useEffect(() => {
    if (error !== undefined) {
      const { data } = error as unknown as ErrorRequestInterface;
      setMError(data?.error || "");
    } else {
      setMError("");
    }
  }, [error]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });

    socket.on("disconnect", () => {
      console.log("Disconnect");
    });

    socket.on("u-item", (userData: UserIntarface) => {
      setUser(userData);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <main>
      <div className="flex flex-row">
        <section className="w-2/3">
          <div className="pt-10 text-center text-2xl px-10 text-purple-400">
            Rick & Morty
          </div>

          <div className="flex w-100 items-center flex-col mx-10">
            <div className="w-full flex justify-center flex-col items-center">
              <Search
                onSearch={(text: string) => {
                  setFilters({ ...filters, name: text });
                }}
              />
              <small className="text-red-400 left-0 mt-2">{mError}</small>
            </div>
            <div className="pt-5 gap-2 grid md:grid-cols-4 sm:grid-cols-2">
              {!isLoading &&
                data?.results.map((item) => {
                  return <Card key={`rm-${item.name}`} item={item} />;
                })}
            </div>
            {isLoading && <Loading />}
          </div>
        </section>

        <section className="w-1/3">
          <div className="pt-10 text-center text-2xl px-10 text-purple-400">
            Mongo
            <UserForm />
            {user && (
              <small className="mt-3 text-white">
                User {user.name} added with _id: {user.id}
              </small>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
