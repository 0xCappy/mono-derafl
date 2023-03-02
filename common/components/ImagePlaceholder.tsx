import { Center, Stack } from "@mantine/core"
import { IconMoodSad } from "@tabler/icons"

interface ImagePlaceholderProps {
    iconSize: number
}

const ImagePlaceholder = ({iconSize}: ImagePlaceholderProps) => {
    return (
        <Stack justify="center" w="100%" style={{ aspectRatio: '1' }}>
            <Center><IconMoodSad size={iconSize} /></Center>
        </Stack>)
}

export default ImagePlaceholder