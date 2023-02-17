import { Button } from "./components/Button/Button"
import { Input } from "./components/Input/Input"
import DarkModeToggle from 'react-dark-mode-toggle';
import { incrementWalletValue, decrementWalletValue } from './store/wallet/actions'
import './App.scss'
import store from "./store"
import { useEffect, useState } from "react";
import { setTheme } from "./store/theme/actions";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state: any) => state.theme)
  const wallet = useSelector((state: any) => state.wallet)

  const [inputValue, setInputValue] = useState(0)
  const [themePatch, setThemePatch] = useState<any>({})

  const darkMode = {
    app: 'darkApp'
  }

  const lightMode = {
    app: ''
  }

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseFloat(e.target.value))
  }

  const incrementHandler = () => {
    store.dispatch(incrementWalletValue(inputValue))
  }

  const decrementHandler = () => {
    store.dispatch(decrementWalletValue(inputValue))
  }

  function handleDarkModeToggle() {
    store.dispatch(setTheme())
  }

  useEffect(() => {
    theme.isDark ? setThemePatch(darkMode) : setThemePatch(lightMode)
  }, [theme])

  return (
    <div className={`App ${themePatch.app}`}>
      <div className='container'>
        <DarkModeToggle
          onChange={handleDarkModeToggle}
          checked={theme.isDark}
          size={60}
        />
        <div className="wallet">
          <h1>{`R$ ${wallet.walletValue}`}</h1>
        </div>
        <Input type="number" style="inputDefault" placeholder="Valor da movimentação" action={changeInputValue} />
        <div className="actions">
          <Button style="greenButton" placeholder="Depositar" action={incrementHandler} />
          <Button style="redButton" placeholder="Sacar" action={decrementHandler} />
        </div>
      </div>
    </div>
  )
}

export default App