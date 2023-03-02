import Abi from "@/types/Abi"
import raflAbi from '../../abi/rafl.json'
import erc721Abi from '../../abi/erc721.json'

const mapAbi = (abi: Abi) => {
    switch (abi) {
        case Abi.DERAFL:
            return raflAbi
        case Abi.ERC721: 
            return erc721Abi
    }
}

export default mapAbi