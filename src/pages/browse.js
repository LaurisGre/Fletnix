import { useContent } from '../hooks';

export default function Browse({ }) {
    // We need the series and the films
    const { series } = useContent('series');
    const { films } = useContent('films');

    // we need slides
    // pass it to the browse container

    return <p>Hai this is browse</p>
}