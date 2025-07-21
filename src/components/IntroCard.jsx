import { IntroInfo } from './IntroInfo'

export function IntroCard() {
  return (
    <>
      <div className="m-8 mt-2 rounded-xl border-2 border-gray-700 p-4 md:max-w-6xl md:p-8">
        <div className="grid grid-cols-1 place-items-center md:grid-flow-row-dense lg:grid-cols-3">
          <div className="flex-none px-4">
            <img
              className="rounded-full sm:h-64 sm:w-64"
              src="./me.jpeg"
              alt="A photo of myself."
            ></img>
          </div>
          <div className="mx-4 mt-4 md:mx-0 lg:col-span-2">
            <IntroInfo></IntroInfo>
          </div>
        </div>
      </div>
    </>
  )
}
