import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "../../../utils/interact";
import "./GameStateFooter.scss";

export const GameStateFooter = ({ quitAction, showInventoryAction, sendDrawRequest }) => {
  const [address, setAddress] = useState('')

  useEffect(() => {
    getCurrentWalletConnected().then(({ address }) => {
      setAddress(address)
    })
    console.log(address)
  }, [])

  return (
    <div className="GameStateFooter">
      <div className="u-back" onClick={showInventoryAction}></div>
      <div className="u-footer-right">
        <div className="u-connect" onClick={async () => {
          const { address } = await connectWallet()
          setAddress(address)
        }}>
          <span>{address ? 'Connected' : 'Connect'}</span>
        </div>
        <div className="u-undo" onClick={quitAction}></div>
        <div className="u-draw" onClick={sendDrawRequest}></div>
      </div>
    </div>
  );
};

export default GameStateFooter;
