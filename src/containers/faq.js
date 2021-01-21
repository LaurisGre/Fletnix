import faqsDate from '../fixtures/faqs.json';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsDate.map(item =>
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            )}

            <OptForm>
                <OptForm.Input placeholder="Enter your email here" />
                <OptForm.Button>Try it now!</OptForm.Button>
                <OptForm.Text>Ready to watch? Get the best deal now!</OptForm.Text>
            </OptForm>

        </Accordion>
    )
}