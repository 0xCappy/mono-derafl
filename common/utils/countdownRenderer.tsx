import { CountdownRenderProps } from "react-countdown";

const countdownRenderer = ({ days, hours, minutes, seconds, completed, props: { date } }: CountdownRenderProps) => {
    if (completed) {
        return <span>Expired</span>;
    } else {
        if (days > 0) {
            return new Date(date).toLocaleDateString()
        }
        return <span>{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>;
    }
};

export default countdownRenderer