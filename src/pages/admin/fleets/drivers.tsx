import {
    Box,
    SimpleGrid} from '@chakra-ui/react'
// Assets
// Custom components

import AdminLayout from 'layouts/admin'
import NFT from 'components/card/NFT'


export default function Drivers() {
    return(
        <AdminLayout brandtext="Drivers">
             {/* <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
                <>
                    <SimpleGrid columns={{ base: 1, md: 3, xl: 4 }} gap='20px' mb='20px'>
                        <NFT
                            name='Lagos to Abuja Cargo'
                            author='By Mr Joe'
                            image={Nft}
                            currentbid='300k'
                            download='#'
                            bidders={["1","2","3","4","5","6","7"]}
                        />
                    </SimpleGrid>
                </>
            </Box> */}
        </AdminLayout>
    )
}