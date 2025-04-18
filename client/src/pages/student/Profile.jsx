import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import Course from "./Course";
import {
  useLoadUserQuery,
  useUpdateUserMutation,
} from "@/features/api/authApi";
import { toast } from "sonner";

const Profile = () => {
  const [name, setName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const { data, isLoading, refetch } = useLoadUserQuery();
  const [updateUser, { isLoading: updateUserIsLoading, isError, error, isSuccess }] = useUpdateUserMutation();

  useEffect(() => {
    if (data?.user) {
      setName(data.user.name || "");
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      refetch();
      toast.success("Profile updated successfully.");
    }
    if (isError) {
      toast.error(error?.data?.message || "Failed to update profile");
    }
  }, [isSuccess, isError, error, refetch]);

  const onChangeHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) setProfilePhoto(file);
  };

  const updateUserHandler = async () => {
    const formData = new FormData();
    formData.append("name", name);
    if (profilePhoto) {
      formData.append("profilePhoto", profilePhoto);
    }
    await updateUser(formData);
  };

  if (isLoading) return <h1 className="text-center text-lg font-medium mt-10">Loading profile...</h1>;

  const user = data?.user;

  return (
    <div className="max-w-4xl mx-auto px-4 my-10">
      <h1 className="font-bold text-3xl text-center md:text-left mb-6">👤 Profile</h1>

      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex flex-col items-center">
          <Avatar className="h-28 w-28 ring-2 ring-blue-500 ring-offset-2 mb-2">
            <AvatarImage src={user?.photoUrl || "https://github.com/shadcn.png"} alt={user?.name || "User"} />
            <AvatarFallback>{user?.name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
          </Avatar>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mt-3">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="transition-all duration-300">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Name</Label>
                  <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Profile Photo</Label>
                  <Input type="file" accept="image/*" onChange={onChangeHandler} className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={updateUserIsLoading} onClick={updateUserHandler}>
                  {updateUserIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex-1 w-full">
          <div className="mb-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Name:</h2>
            <p className="text-gray-700 dark:text-gray-300 ml-1">{user?.name}</p>
          </div>
          <div className="mb-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Email:</h2>
            <p className="text-gray-700 dark:text-gray-300 ml-1">{user?.email}</p>
          </div>
          <div className="mb-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Role:</h2>
            <p className="text-gray-700 dark:text-gray-300 ml-1">{user?.role?.toUpperCase()}</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📚 Enrolled Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {user?.enrolledCourses?.length > 0 ? (
            user.enrolledCourses.map((course) => (
              <div key={course._id} className="hover:shadow-md hover:scale-[1.02] transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-xl">
                <Course course={course} />
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400"></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
