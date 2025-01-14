import React, { useContext } from 'react'
import styled from 'styled-components'
import { Text, Flex, Box, CloseIcon, IconButton, Button, useMatchBreakpoints } from '@reactswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { switchNetwork } from 'components/Menu/GlobalSettings/ChangeNetworkModal'
import { networks, networkOrder } from 'config/constants/networks'
import { currentChainIdContext } from 'contexts/chainId'

const Container = styled(Flex)`
  overflow: hidden;
  height: 60px;
  padding: 12px;
  align-items: center;
  background: linear-gradient(0deg, rgba(39, 38, 44, 0.4), rgba(39, 38, 44, 0.4)),
    linear-gradient(180deg, #8051d6 0%, #492286 100%);
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0px;
    background: linear-gradient(180deg, #ff0000 0%, #990000 100%);
  }
`

const InnerContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const SpeechBubble = styled.div`
  border-radius: 16px;
  padding: 8px;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & ${Text} {
    flex-shrink: 0;
    margin-right: 4px;
  }
`
const MobileBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px 5px;
  align-items: center;
  flex-wrap: wrap;
`
const ConWrapper = styled(Container)`
  background: linear-gradient(180deg, #ff0000 0%, #990000 100%);
`

const WrongNetworkWarning: React.FC = () => {
  const { t } = useTranslation()
  const { currentChainId, setChainId /* , setsync, sync */ } = useContext(currentChainIdContext)
  const { isMobile, isMd } = useMatchBreakpoints()
  const net = networks[currentChainId]
  const warningText = t(`Please switch to ${net.name} Mainnet.`)
  const warningTextAsParts = warningText.split(' ')
  const warningTextComponent = (
    <>
      <Text as="span" color="#0F172A" small bold textTransform="uppercase">
        {t('Network warning: ')}
      </Text>
      {warningTextAsParts.map((text, i) => (
        <Text
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          small
          as="span"
          color="white"
        >
          {text}
        </Text>
      ))}
      <Button
        scale="sm"
        onClick={() => {
          switchNetwork(net, setChainId)
        }}
      >
        Switch Network
      </Button>
    </>
  )
  return (
    <ConWrapper>
      {isMobile || isMd ? (
        <>
          <MobileBox>{warningTextComponent}</MobileBox>
        </>
      ) : (
        <>
          <InnerContainer>
            <SpeechBubble>{warningTextComponent}</SpeechBubble>
          </InnerContainer>
        </>
      )}
    </ConWrapper>
  )
}

export default WrongNetworkWarning
