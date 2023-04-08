import Abi from "@/types/Abi"
import raflAbi from '../../abi/rafl.json'
import erc721Abi from '../../abi/erc721.json'
import royaltyFeeSetter from '../../abi/royaltyFeeSetter.json'

const mapAbi = (abi: Abi) => {
    switch (abi) {
        case Abi.DERAFL:
            return raflAbi
        case Abi.ERC721: 
            return erc721Abi
        case Abi.ROYALTY_FEE_SETTER:
            return royaltyFeeSetter
    }
}

export default mapAbi