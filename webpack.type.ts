/**
 * Можно использовать что бы указат путь
 * Если указывать вручную, это может иметь недостаток,
 * так как у людей могут быть разные Операционные системы
 * и там могут быть проблемы с путями
 * path поможет точно получить тот путь, который нам нужен
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const path = require('path');

/**
 * Объект с где ключ будет как имя файла при билде
 * а значение это путь к файлу который нужно билдить
 * @example Примечание пути лучше создавать через path.resolve(__dirname, "src", "index.js")
 */
interface IEntryObject {
  [key: string]: string
}

type Entry = IEntryObject | string; // Path to main js file or files

/**
 * Название файла при билде
 * Значение может быть
 * @example
 * [name].[hashcontent].js
 * @name будет считаться именем файла
 * @hashcontent хэш который будет уникальным№ Нужен для того что бы избежать кэша браузера
 *
 */
type IOutputFilename = string;

interface IOutput {
  filename: IOutputFilename,
  path: string // путь где будет лежать выходной файлб
  clean: boolean // Очищать ли папку где хранятся выходные файлы, перед билдом
}

/**
 * Для чего предназначен конфиг.
 * Если выбрать production, то output файл или файлы будут сжаты
 * @default production
 */
type Mode = 'production' | 'development';

/**
 * Loader это преобращовател файлов
 * @example svg, sass, ts
 * Запускает loader к файлам
*/
interface WebpackModuleRules {
  /**
   * regex какие названия файлов или расширения брать
   * @example
   * /\.tsx?&/ - берет все файлы ts | tsx
   */
  test?: string,
  // Название laoder. Например: ts-loader
  loader: string,
  // regex убрать папку где не надо преобразовывать
  exlude: string
}

interface WebpackModule {
  rules: WebpackModuleRules
}

interface Resolve {
  // Массив строк расширении файлов, которы можно импортировать без указание расширения
  extensions: string[]
}

/**
 * Пока неизвестно какую структуру он имеет
 * Плагины зачем могут вроде писать некоторые готовые скрипты
 * мы передаем их webpack'у и он запускает их
*/
interface WebpackPlugin {
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
interface WebpackConfig {
  mode: Mode,
  entry: Entry,
  output: IOutput,
  plugins: WebpackPlugin,
  resolve: Resolve,
  module: WebpackModule
}
