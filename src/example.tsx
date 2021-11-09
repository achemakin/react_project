// 1. Работа с простыми типами
// Напишите тип функции, конкатенирующей две строки

type concat = (a: string, b:string) => string;

const concat: concat = (a, b) => a + b;

concat('Hello ', 'World') // -> Hello World;


//----------------------------------------------------------


// 2. Работа с интерфейсами
// Напишите интерфейс для описания следующих данных

interface IMyHometask {
  howIDoIt: string, 
  simeArray: [string, string, number],
  withData: Array<{
    howIDoIt: string,
    simeArray: [string, number]
  }>
}

const MyHometask: IMyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [
      { 
        howIDoIt: "I Do It Wel",
        simeArray: ["string one", 23]
      },
      { 
        howIDoIt: "I Do It Wel",
        simeArray: ["string one", 23]
      },
    ],
}


// -----------------------------------------------------------------


// 3. Типизация функций, используя Generic
// В уроке про Generics мы написали интерфейс массива MyArray
// interface MyArray<T> {
//   [N: number]: T;
//  добавьте типизацию для метода reduce
//     reduce();
// }

interface MyArray<T> {
  [N: number]: T;
  
  map<U>(fn:(el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;

  reduce<U>(fn: (accumulator: T, value: T, index: number, arr: MyArray<T>) => U, initialValue?: T): U;
}

const MyArray: MyArray<number> = [1, 2, 3];
MyArray.map((f) => f + 1); // -> [2, 3, 4]
MyArray.reduce((accumulator, value) => accumulator + value, 3); // -> 9


// -------------------------------------------------------------------


// 4. Работа с MappedTypes
interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}
// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.
// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }
}


// -------------------------------------------------------------------------


// 5*. Работа с Generic, Mapped Types, Type inference №1
// Это React Functional Component 
function HomeComponent(props: { firstProp: string } ) {
  return (
    <div>
      { props.firstProp }
    </div>
  )
}
// Напишите такой тип, который извлечет тип props из этого или любого другого React компонента. Подсказка: любой реакт компонент расширяет React.ComponentType<Props>

type TMyType<T> =  T extends React.ComponentType<infer E> ? E : never;

type TReactComponentProps = TMyType<typeof HomeComponent>;

const props: TReactComponentProps = {
  firstProp: '123'
}


//--------------------------------------------------------------------------------------------------


// 6*. Работа с Generic, Mapped Types, Type inference №2
// Напишите такой тип TGetJSXPropsProp, который извлекает все HTML свойства, доступные для любого jsx элемента.

type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T];

type TDivProps = TGetJSXPropsProp<'div'>;

const props1: TDivProps = {
  some: '1233', // throw error потому что не содержится в атрибутах div
  className: 'handler', // не выкидывает ошибку так как валидно для div элемента
  id: '111',
  tabIndex: 0,
};