import './App.css'
import { useState } from 'react';

function App() {
  const [ user, setUser ] = useState<string>('');
  const [ address, setAddress ] = useState<string>('');

  const topics = [
    'Dispositivos da Amazon',
    'Livros',
    'eBooks',
    'Computadores e Informática',
    'Cuidados Pessoais',
    'Games e Consoles',
    'Cozinha',
    'Brinquedos e Jogos',
    'Bebês',
    'Papelaria e Escritório',
    'Alimentos e Bebidas',
  ]
  return (
    <>
      <div className='flex flex-row border p-2 items-center'>
        <img src='' className='border p-2 w-[159px] h-16'  />
        <div className='flex flex-row items-end'>
          <img className='w-[15px] h-[15px]' />
          <div className='flex flex-col'>
            <a>
              a entrega será feita { address }
            </a>
            <a>
              Atualizar local
            </a>
          </div>
        </div>
        <input type="text" placeholder='...' className='border p-2 flex-1 m-3 h-12 rounded-md focus:outline-none focus:border-blue-500' />
        <button className='border p-2'>Pesquisar</button>
        <div className='flex flex-col w-[128px]'>
          <a>
            Olá, {user}
          </a>
          <a>Contas e listas</a>
        </div>
        <div className='flex flex-col w-[81px]'>

        </div>
        <img className='w-[139px]' />
      </div>

      <div className='flex flex-row border p-1 bg-color-blue-900'>
        <a>
          Todos
        </a>
        <a>
          Venda na Amazon
        </a>
        <a>
          eBooks
        </a>
        <a>
          Ideias de Presente
        </a>
        <a>Comprar Novamente</a>
        <a>
          Eletrônicos
        </a>
        <a>Histórico de Navegação</a>
      </div>

      <div className="relative">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-full relative">
        <div className=" inset-0 flex flex-row items-center justify-center">
        <div className="section-container border p-2 bg-white">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 m-3">
            <img src='https://m.media-amazon.com/images/I/81SuEoiJXlL._AC_SY110_.jpg' className='w-[126px] h-[132px]' />
            <img src='https://m.media-amazon.com/images/I/81SuEoiJXlL._AC_SY110_.jpg' className='w-[126px] h-[132px]' />
            <img className='w-[126px] h-[132px]' />
            <img className='w-[126px] h-[132px]' />
          </div>
        </div>

        <div className="section-container border p-2 bg-white">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 m-3">
            <img className='w-[126px] h-[132px]' />
            <img className='w-[126px] h-[132px]' />
            <img className='w-[126px] h-[132px]' />
            <img className='w-[126px] h-[132px]' />
          </div>
        </div>

        <div className="section-container border p-2 bg-white">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 m-3">
            <img className='w-[126px] h-[132px]' />
            <img className='w-[126px] h-[132px]' />
            <img className='w-[126px] h-[132px]' />
            <img className='w-[126px] h-[132px]' />
          </div>
        </div>

        <div className="section-container border p-2 bg-white">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 m-3">
            <img className='w-[126px] h-[132px]' />
            <img className='w-[126px] h-[132px]' />
            <img className='w-[126px] h-[132px]' />
            <img className='w-[126px] h-[132px]' />
          </div>
        </div>

        </div>
      </div>

      <div className="flex flex-row overflow-x-auto whitespace-nowrap space-x-4 items-center"> 
      {topics.map((topic: any, index: number) => (
        <div key={index} className='min-w-[200px] h-[200px] border p-2 bg-purple-100'>
          <img src='https://images-na.ssl-images-amazon.com/images/G/32/br-events/2022/gateway/CategoryBubbleShoveler/XCM_CUTTLE_1443641_2425114_200x200_1X_pt_BR._CB633796514_.jpg' />
        </div>
      ))}
</div>


</div>

    </>
  )
}

export default App
