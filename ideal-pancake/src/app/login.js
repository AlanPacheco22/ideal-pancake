import { signIn } from 'next-auth/react';


const handleLoginWithGoogle = async () => {
  await signIn('google');
};

const LoginPage = () => {
  return (
    <div>
      <h1>Página de Login</h1>
      <button onClick={handleLoginWithGoogle}>Iniciar sesión con Google</button>
    </div>
  );
};

export default LoginPage;
