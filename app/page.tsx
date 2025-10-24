import FormWrapper from './components/FormWrapper';

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-sans" style={{ backgroundColor: '#28433e' }}>
      <main className="w-full max-w-3xl py-32 px-16" style={{ backgroundColor: '#28433e' }}>
        <FormWrapper />
      </main>
    </div>
  );
}
