import { Flex, Icon, Text } from "@chakra-ui/core";
import { MdArrowForward } from "react-icons/md";

interface ISectionHeaderProps {
  sectionName: string;
  detailsLabel: string;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({ sectionName, detailsLabel }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" mt="3"
      borderLeft="3px solid" borderColor="red.500" height="30px">
      <Text fontSize="md" fontWeight="600" ml="3">{sectionName}</Text>
      <Text fontSize="sm" color="gray.500">
        {detailsLabel}
        <Icon as={MdArrowForward} size="3" ml="1" />
      </Text>
    </Flex>
  );
}

export default SectionHeader;