import { IntroInfo } from './IntroInfo'

export function IntroCard() {
  return (
    <>
      <div className="p-4 md:max-w-6xl">
        <div className="grid grid-cols-1 place-items-center md:grid-flow-row-dense lg:grid-cols-3">
          <div className="flex-none px-4">
            <img
              className="h-64 w-64 rounded-full"
              src="./me.jpeg"
              alt="A photo of myself."
            ></img>
          </div>
          <div className="mx-4 lg:col-span-2 lg:mx-0">
            <IntroInfo></IntroInfo>
          </div>
        </div>
      </div>
    </>
  )
}
