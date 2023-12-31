"use client"

import App from "@/components/App"
import { Provider } from "@/components/UseContext"


export default function Home() {

  return (
    <Provider>
      <App/>
    </Provider>
  )
}