import faqsDate from '../fixtures/faqs.json';
import { Accordion } from '../components';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsDate.map(item =>
                <Accordion.Item>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            )}
        </Accordion>
    )
}