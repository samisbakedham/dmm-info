import React, { useRef } from 'react'
import styled from 'styled-components'

import { NETWORK_ICON } from '../../constants/networks'
import { ApplicationModal, useModalOpen, useToggleNetworkModal } from '../../contexts/Application'
import Modal from '../Modal'
import ModalHeader from '../ModalHeader'
import { ButtonEmpty } from '../ButtonStyled'
import { useOnClickOutside } from '../../hooks'
import { NetworksInfoEnv, useNetworksInfo } from '../../contexts/NetworkInfo'
import { useHistory, useParams } from 'react-router-dom'

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px 36px 60px 36px;
  width: 100%;
  background-color: ${({ theme }) => theme.bg6};
`

const InstructionText = styled.div`
  margin-bottom: 24px;
  font-size: 14px;
  color: ${({ theme }) => theme.text9};
`

const NetworkList = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    grid-template-columns: 1fr;
    width: 100%;
  `};
`

const ListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ theme, selected }) => (selected ? theme.primary : theme.buttonBlack)};
`

const NetworkLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`

const SelectNetworkButton = styled(ButtonEmpty)`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.primary1};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  &:focus {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.primary1};
    border-radius: 8px;
  }
  &:active {
    text-decoration: none;
  }
  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }
`

export default function NetworkModal() {
  const [networksInfo] = useNetworksInfo()
  const networkModalOpen = useModalOpen(ApplicationModal.NETWORK)
  const toggleNetworkModal = useToggleNetworkModal()
  const node = useRef()
  useOnClickOutside(node, networkModalOpen ? toggleNetworkModal : undefined)
  const history = useHistory()
  const { network: currentNetworkURL } = useParams()

  return (
    <Modal isOpen={networkModalOpen} onDismiss={toggleNetworkModal}>
      <ModalContentWrapper ref={node}>
        <ModalHeader onClose={toggleNetworkModal} title="Select a Network" />

        <InstructionText>You are currently on {networksInfo.NAME} Analytics page. Switch network?</InstructionText>

        <NetworkList>
          {NetworksInfoEnv.map((network, index) => {
            if (networksInfo.ENV_KEY === network.ENV_KEY) {
              return (
                <SelectNetworkButton key={index} padding="0">
                  <ListItem selected>
                    <img src={NETWORK_ICON[network.CHAIN_ID]} alt="Switch Network" style={{ width: '2rem', marginRight: '1rem' }} />
                    <NetworkLabel>{network.NAME}</NetworkLabel>
                  </ListItem>
                </SelectNetworkButton>
              )
            }

            return (
              <SelectNetworkButton
                key={index}
                padding="0"
                onClick={() => {
                  toggleNetworkModal()
                  const currentUrl = currentNetworkURL
                    ? history.location.pathname.split('/').slice(2).join('/')
                    : history.location.pathname.split('/').slice(1).join('/')
                  const redirectURL = `/${network.URL_KEY}/` + currentUrl
                  history.push(redirectURL)
                }}
              >
                <ListItem>
                  <img src={NETWORK_ICON[network.CHAIN_ID]} alt="Switch Network" style={{ width: '2rem', marginRight: '1rem' }} />
                  <NetworkLabel>{network.NAME}</NetworkLabel>
                </ListItem>
              </SelectNetworkButton>
            )
          })}
        </NetworkList>
      </ModalContentWrapper>
    </Modal>
  )
}
