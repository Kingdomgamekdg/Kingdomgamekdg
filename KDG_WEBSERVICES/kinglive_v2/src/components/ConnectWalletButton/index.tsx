import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, ButtonProps, ConnectorId, useWalletModal } from '@bscsswap/uikit'
import { injected, walletconnect } from '../../connectors'
import useI18n from '../../hooks/useI18n'

const UnlockButton: React.FC<ButtonProps> = props => {
  const TranslateString = useI18n()
  const { account, activate, deactivate } = useWeb3React()
console.log('account',account)
  const handleLogin = (connectorId: ConnectorId) => {
    if (connectorId === 'walletconnect') {
    
      return activate(walletconnect)
    }
    return activate(injected)
  }

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)

  return (
    <Button onClick={onPresentConnectModal} {...props} style={{width:"100%" , borderRadius:"10px" , height:"46px" }}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
