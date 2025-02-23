import s from './Column.module.css'

type PaginationProps = {
  data: string[];
  loading: boolean;
};

const Column: React.FC<PaginationProps> = ({ data, loading }) => {

    if (loading) {
      return (
        <h1>Loading...</h1>
      )
    }

    return (
      <div className={s.column}>
        {
            data.map((el, index) => {
                return (
                    <div className={s.el} key={index}>{el}</div>
                )
            })
        }
      </div>
    );
}
  

export default Column