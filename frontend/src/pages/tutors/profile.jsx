import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, put } from "~/utils/fetchAPI";

import Menu from "~/components/Menu";

export default function TutorProfile() {
  const { data: user } = useQuery({ queryKey: ["user"], queryFn: () => get("user"), retry: 0 });
  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    mutate(formData);
  };

  const { data, mutate, isLoading, isError, error, isSuccess } = useMutation({
    mutationFn: async (data) => {
      let data_ = await put("user", { ...data });
      console.log({ data_ });
      return data_;
    },
    onSuccess: (result) => {
      console.log("Profile Update Success", result);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (e) => {
      console.log({ e });
    },
  });

  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 px-12">
        <h1 className="text-4xl m-0">Profile</h1>
        <div className="grid grid-cols-3 py-6 gap-8">
          <form onSubmit={handleSubmit} className="w-320px grid gap-5">
            <input type="text" name="firstname" defaultValue={user?.firstname} placeholder="First Name" />
            <input type="text" name="lastname" defaultValue={user?.lastname} placeholder="Last Name" />
            <input type="text" name="phone" defaultValue={user?.phone} placeholder="Phone" />
            <div />
            <button type="submit">Update Profile</button>
          </form>
        </div>
      </section>
    </div>
  );
}
