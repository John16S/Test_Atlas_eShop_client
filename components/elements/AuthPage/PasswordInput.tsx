import { IAuthPageInput } from '@/types/auth'
import styles from '@/styles/auth/auth.module.scss'

const PasswordInput = ({ register, errors }: IAuthPageInput) => (
    <label className={styles.form__label}>
        <input
            {...register('password', {
                required: 'Введите пароль!',
                minLength: 6,
                maxLength: 20,
            })}
            className={styles.form__input}
            type="password"
            placeholder="Password"
        />
        {errors.password && (
            <span className={styles.error_alert}>
                {errors.password?.message}
            </span>
        )}
        {errors.password && errors.password.type === 'minLength' && (
            <span className={styles.error_alert}>Минимум 6 символа!</span>
        )}
        {errors.password && errors.password.type === 'maxLength' && (
            <span className={styles.error_alert}>Не более 20 символов!</span>
        )}
    </label>
)

export default PasswordInput
