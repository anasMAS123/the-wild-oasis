import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error.message);
    throw new Error("the email or password are incorrect ");
  }

  return data;
}

export async function getCurrentUser() {
  // i ask if there is already person logged in and his data is stored in local storage
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data } = await supabase.auth.getUser();
  return data?.user;
}

export async function logout() {
  const { error } = supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ fullName, password, avatar }) {
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  if (!avatar) return data;
  // upload the avatar image

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);
  //update the avatar image

  const { data: updatedUser, error: errorUpdateAvatar } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });
  if (errorUpdateAvatar) throw new Error(errorUpdateAvatar.message);

  return updatedUser;
}
