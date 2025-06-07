import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { REM } from 'next/font/google';

export default function Home() {
  return (
    <main className="cartao">
      <div className='cartao-header'>
        <Image src="/sekiro.png" alt="Foto perfil" width={2560} height={1440} className="imagem" />
        
      </div>
      <div className="conteudo">
        <h1>Sekiro</h1>
        <h2>Desenvolvedor Back-end Java</h2>
        <br />
        <h4>Email: sekiro@ashina.com</h4>
        <h4>Linkedln: linkedln.com/in/sekiro</h4>
        <h4>Github: github.com/sekiro</h4>
        <br />
        <Link href="/detalhes">
          <button className="button">Clique Aqui para ver minhas habilidades</button>
        </Link>
      </div>
    </main>
  );
}
