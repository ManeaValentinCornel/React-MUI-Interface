import { Button, Container, Box } from '@mui/material';
import SectionHeading from '../../ui/SectionHeading';
import GalleryGrid from './GalleryGrid';
import SectionBox from './../../ui/SectionBox';

/**
 * Gallery topic section component, consisting of a SectionHeading component (title,subtitle), and a fully responsive grid of images.
 * A button link to the portfolio page is located at the bottom of the component.
 *
 */
const GalleryTopic = () => {
    return (
        <SectionBox isGray={true}>
            <Container>
                {/*SECTION  HEADING */}
                <SectionHeading
                    heading="Our previous work"
                    subheading=" Mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor
                    pretium viverra ."
                />
                {/*GALLERY  GRID */}
                <GalleryGrid />
                <Box mt={10} sx={{ textAlign: 'center' }}>
                    <Button variant="contained" color="primary" size="large">
                        Vezi mai multe lucrari !
                    </Button>
                </Box>
            </Container>
        </SectionBox>
    );
};

export default GalleryTopic;
