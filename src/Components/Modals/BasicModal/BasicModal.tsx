
import Button from 'src/Components/Button/Button'
import Card from 'src/Components/Card/Card'


export default function BasicModal() {


    return (
        <Card>
            <div className="mt-16">
                <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent
                    you an email with all of the details of your order.
                </p>
            </div>

            <div className="mt-16"  >
                <Button color='black'>Got it, Thanks!</Button>
            </div>
        </Card>
    )
}
